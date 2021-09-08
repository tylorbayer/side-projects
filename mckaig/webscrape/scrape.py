import requests
from bs4 import BeautifulSoup
import json

# https://www.dealerrater.com/dealer/McKaig-Chevrolet-Buick-A-Dealer-For-The-People-dealer-reviews-23685/page1/?filter=#link
if __name__ == "__main__":
    reviews = []

    for i in range(1,6):
        page = requests.get(f'https://www.dealerrater.com/dealer/McKaig-Chevrolet-Buick-A-Dealer-For-The-People-dealer-reviews-23685/page{i}/?filter=#link')
        soup = BeautifulSoup(page.content, 'html.parser')

        reviewSoups = soup.find_all(class_="review-entry")

        for reviewSoup in reviewSoups:
            # Assuming first span is always going to be the username (format: "- User Name"; replace initial "- ")
            user = reviewSoup.span.text.replace('- ', '', 1)

            # Assuming first p tag contains review text
            review = reviewSoup.p.text

            # Assuming first element with "rating-static" class is overall rating element and rating value is from class "rating-[rating int]"
            ratingSoup = reviewSoup.find(class_="rating-static")
            rating = None
            for elemClass in ratingSoup['class']:
                classSplit = elemClass.split('-')
                if classSplit[0] == 'rating' and classSplit[1].isnumeric():
                    rating = int(classSplit[1])

            reviews.append({
                'user': user,
                'rating': rating,
                'review': review
            })

    # Just wanted to scrape the data for fun... only printing the first 3 reviews (not the best 3)
    print(json.dumps(reviews[:3], indent=4))
