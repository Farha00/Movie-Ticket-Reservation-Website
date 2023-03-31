import pymongo

def register(details):
    pymongo.InsertOne(details)