import sys
from pymongo import MongoClient

client = MongoClient("mongodb://127.0.0.1:3001/meteor")
db = client.meteor
fileId = sys.argv[1]
fileObj = db.files.find_one(fileId)
code = fileObj.get('code')
exec code
