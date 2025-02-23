import requests                                       #
session = requests.Session()

OPENAI_API_KEY = open("API-Ask_ChatGPT", "r").read()
session.headers.update({
    "Content-Type": "application/json",
    "Authorization": f"Bearer {OPENAI_API_KEY}"       # API key input
})

data = {
    "model": "gpt-4o-mini",                           # Roles:
    "messages":                                       #   user - Pass your end-user's message to the model
        [                                             #   developer - Describe how the model should generally behave
            {                                         #   assistant - Examples for how it should respond
                "role": "developer",                  #               OR previously generated messages if in a conversation
                "content": "You are a medical professional with decades of experience who is very smart. "
                "Read a list of injuries, separated by commas, a single patient is suffering from. "
                "Rank the list of injuries on a scale of 1-10 based off of severity. "
                "1 means that the injuries are not urgent and 10 means the injuries require immediate action. Only respond with a number representing the combined severity of the injuries, with a limit of 2 decimal places."
            },
            {
                "role": "user",
                "content": "Puncture Wound, Dislocation, Laceration."
            }
        ],
    "temperature" : 0
}

import json
json_data = json.dumps(data)

response = session.post(url='https://api.openai.com/v1/chat/completions', data=json_data)
  # 200 = Request Handled OK, 400 = Bad Request, 401 = Unauthorized
print(response.content.decode('utf8'))  # get a response from the ai
