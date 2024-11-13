import json

with open('books.json') as file:
    data = json.load(file)

first_book_title = data['Books'][0]['title']
print("Title of the first book:", first_book_title)

second_book_author = data['Books'][1]['author']
print("Author of the second book:", second_book_author)

all_genres = [genre for book in data['Books'] for genre in book['genres']]
print("Genres of all books:", ", ".join(all_genres))
