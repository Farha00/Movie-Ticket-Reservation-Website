from django.shortcuts import render, HttpResponse
from django.urls import resolve
import json
from pymongo import MongoClient
from cryptography.fernet import Fernet
import pickle

times = 0

def register(request):
    global times
    print('Register Page Opened!')
    times += 1
    current_url = request.path
    print(current_url)
    print(0)
    if request.path == '/register/signup/':
        report_loc = '../signup/'
    else: report_loc = 'signup/'
    return render(request, 'register.html', {'loc':report_loc,'error': ''})
def signup(request):
    print('Register Request Made!')
    print('Reading Data from JSON')
    if request.path == '/register/signup/':
        report_loc = '../signup/'
    else: report_loc = 'signup/'

    #connecting mongodb
    client = MongoClient()
    client = MongoClient('localhost', 27017)
    #connectin db and table
    db = client['movietix']
    password_table = db['passwords']

    #json2 = open('user_data.json',) 
    #data = json.load(json2) 
    #l1 = data['u_data'][0]
    # emails = list(passwords.emails())
    # passwords = list(l1.values())
    # json2.close() 
    print('Read data from JSON')
    email = request.POST['email']
    password = request.POST['password']
    confirm_password = request.POST['password1']
    
    usernames = []

    if password == confirm_password:
        if password_table.find_one({'emails':email}):
            print('The Username or Email ID is already taken, returning HTTP response')
            return render(request, 'register.html', {'loc':report_loc,'errorclass':'alert alert-danger','error': 'Sorry. The Username or Email ID is already taken.'})
        else:
            #Encryption
            #filedirictory erro here
            filename = '../Encryption_key.pickle'
            'project4\Encryption_key.pickle'
            print('loading encryption key')
            with open('../project4/Encryption_key.pickle', 'rb') as f:
                fernet = pickle.load(f)
            # print('loading encryption key, encryption key type',type(encryption_key_bytes))
            # encryption_key = Fernet(encryption_key_bytes)
            
            # fernet = Fernet(encryption_key)
            encpassword = fernet.encrypt(password.encode())

            password_table.insert_one({'passwords': encpassword,
                  'emails': email
                  })
            times = 0
            print('Registered new user, returning HTTP response')
            return HttpResponse('You are now registered')
    else:
        print('Passwords do not match, returning HTTP response')
        return render(request, 'register.html', {'loc':report_loc,'errorclass':'alert alert-danger','error': 'Sorry. The Passwords do not match.'})
    # if email not in emails:
    #     if password == password1:
    #         emails.append(email)
    #         passwords.append(password)
    #         d4 = {emails[len(emails)-1]: passwords[len(emails)-1]}
    #         for x in range(len(emails)-1):
    #             d4 = dict(list(d4.items()) + list({emails[x]:passwords[x]}.items()))
    #         json_object = '{"u_data": ['+json.dumps(d4, indent = 4)+']}'
    #         a = open('user_data.json', 'w')
    #         a.write(json_object)
    #         a.close()
    #         times = 0
    #         print('Registered new user, returning HTTP response')
    #         return HttpResponse('You are now registered')
    #     else:
    #         print('Passwords do not match, returning HTTP response')
    #         return render(request, 'register.html', {'loc':report_loc,'errorclass':'alert alert-danger','error': 'Sorry. The Passwords do not match.'})
    # else:
    #     print('The Username or Email ID is already taken, returning HTTP response')
    #     return render(request, 'register.html', {'loc':report_loc,'errorclass':'alert alert-danger','error': 'Sorry. The Username or Email ID is already taken.'})