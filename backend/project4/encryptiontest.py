from cryptography.fernet import Fernet
import pickle

key = Fernet.generate_key()

# Instance the Fernet class with the key

fernet = Fernet(key)

# Define the filename to store the pickle file
filename = 'Encryption_key.pickle'
'project4\Encryption_key.pickle'
# Store the binary data in the pickle file
with open(filename, 'wb') as f:
    pickle.dump(key, f)

# then use the Fernet class instance
# to encrypt the string string must
# be encoded to byte string before encryption
# encMessage = fernet.encrypt(message.encode())

# print("original string: ", message)
# print("encrypted string: ", encMessage)

# decrypt the encrypted string with the
# Fernet instance of the key,
# that was used for encrypting the string
# encoded byte string is returned by decrypt method,
# so decode it to string with decode methods
# decMessage = fernet.decrypt(encMessage).decode()

# print("decrypted string: ", decMessage)
# print(type(key))