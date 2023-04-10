from django.shortcuts import render, HttpResponse
import json
from pymongo import MongoClient
from cryptography.fernet import Fernet
import pickle

times = 0
def login(request):
    global times
    print('Login Page Opened!')
    times += 1
    if request.path == '/login/signin/':
        report_loc = '../signin/'
    else: report_loc = 'signin/'
    return render(request, 'index.html', {'loc':report_loc,'error': ''})
def signin(request):
    print('Login Request Made!')
    # print('Reading Data from JSON')
    # json2 = open('user_data.json',) 
    # data = json.load(json2) 
    # l1 = data['u_data'][0]
    # emails = list(l1.keys())
    # passwords = list(l1.values())
    # json2.close() 
    # print('Read data from JSON')
    global times
    times = times+1
    if request.path == '/login/signin/':
        report_loc = '../signin/'
    else: report_loc = 'signin/'

        #connecting mongodb
    client = MongoClient()
    client = MongoClient('localhost', 27017)
    #connectin db and table
    db = client['movietix']
    password_table = db['passwords']

    email = request.POST['email']
    password = request.POST['password']
    if password_table.find_one({'emails':email}):
        user = password_table.find_one({'emails': email})
        filename = '../project4/Encryption_key.pickle'
        with open('../project4/Encryption_key.pickle', 'rb') as f:
            fernet = pickle.load(f)
        # fernet = Fernet(encryption_key)
        # encpassword = fernet.encrypt(password.decode())
        print("db password ",user.get('password'))
        print("Entered password ",password)
        db_password = user.get('passwords')
        print("db password", db_password)
        print('db_passsword', type(db_password))
        decrypt = fernet.decrypt(db_password)
        print('decrypted message',decrypt)
        
        if fernet.decrypt(db_password).decode() == password:
            times = 0
            print('Logged in User, returning HTTP response')
            return HttpResponse('You are registered')
        else:
            print('Email != Password, returning HTTP response')
            return render(request, 'login.html', {'loc':report_loc,'errorclass':'alert alert-danger','error': 'Sorry. The Email and Password do not match.'})
    else:
        print('Account does not exist, returning HTTP response')
        return render(request, 'login.html', {'loc':report_loc,'errorclass':'alert alert-danger','error': 'Sorry. No such account exists. Consider signing up!'})