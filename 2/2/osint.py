import requests, re

from bs4 import BeautifulSoup 

def get_data(search_string, start):

    url = 'http://www.google.com/search'
    
    payload = { 'q' : search_string, 'start' : start }
    
    my_headers = { 'User-agent' : 'Mozilla/11.0' }
 
    r = requests.get( url, params = payload, headers = my_headers )

    soup = BeautifulSoup( r.text, 'html.parser' )
 
    for link in soup.find_all('h3'):
        #print(link.get_text())
        print(link)

#intitle:александр чумилин inurl:profile

def main():

    result = []
    pages  = 5
    search = 'Александр Чумилин'
    for page in range ( 0, int(pages) ):
        get_data(search, str(page * 10))

if __name__ == '__main__':
    main()