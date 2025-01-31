from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup

# Set up the WebDriver
options = webdriver.ChromeOptions()
options.add_argument("--headless")  # run in the background without opening a browser window

# Use webdriver_manager to handle ChromeDriver installation
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# Navigate to the website
url = "https://wiki.supercombo.gg/w/Street_Fighter_6"  # Replace with the actual framedata URL
driver.get(url)

# Wait for the page to load
driver.implicitly_wait(10)  # Wait 10 seconds for elements to load

# Scrape data (for example, scrape character names and images)
soup = BeautifulSoup(driver.page_source, 'html.parser')

# Example: Scrape character names and images
characterContainer = soup.find('div', {'style': "display: flex; gap: 0.6rem; justify-content: center; flex-wrap: wrap;"})
charactersHtml = characterContainer.find_all('a')  # Update the correct selector
charactersLinks = []

for character in charactersHtml:
    charactersLinks.append(character.attrs['href'])

for characterLink in charactersLinks:
    driver.get("https://wiki.supercombo.gg" + characterLink + "/Frame_data")
    print(characterLink)
    
    driver.implicitly_wait(10)

    soup = BeautifulSoup(driver.page_source, 'html.parser')

    try:
        frameTableContainer = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "DataTables_Table_0"))
        )
        print("Table found!")  # Debugging message
    except:
        print("Table not found after waiting.")
        frameTableContainer = None  # Prevents crashes if the table never loads

    if frameTableContainer:
        soup = BeautifulSoup(driver.page_source, 'html.parser')
        frameTableContainer = soup.find("table", {"class": "cargoDynamicTable display dataTable"})
        
        if frameTableContainer:
            frameTable = frameTableContainer.find('tbody')
            frameData = frameTable.find_all('tr')

            for moveData in frameData:
                None
                # print(moveData.find('td').text.strip())  # Print move data
        else:
            print("Table not found in BeautifulSoup parsing.")
    

# Clean up
driver.quit()
