from bs4 import BeautifulSoup
import os
import pandas as pd

d= {"title": [],
    "price": [] ,
    "link" :[], 
      
    }


for file in os.listdir("FLipkart/data"):
    try:
        with open(f"FLipkart/data/{file}") as f:
            html_doc= f.read()
        soup= BeautifulSoup(html_doc,'html.parser')

        t= soup.find("div", attrs= {"class": "KzDlHZ"})
        title= t.get_text()

       

        l= soup.find("a", attrs={"class": "CGtC98"})
        link= "https://www.flipkart.com" + l['href']

       

        p= soup.find("div", attrs={"class": "yRaY8j"})
        price= p.get_text()

        new_price = price.replace("â‚¹", "")
        
       

        d["title"].append(title)
        d["price"].append(new_price)
        d["link"].append(link)
        
    except Exception as e:
        print(e)




df= pd.DataFrame(data=d)

df.to_csv("Flipkart/data.csv")
