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
                "content": "You are professional doctor with decades of experience."
            },
            {
                "role": "user",
                "content": "Write a list injuries separated by commas."
            }
        ]
}

import json
json_data = json.dumps(data)

response = session.post(url='https://api.openai.com/v1/chat/completions', data=json_data)
  # 200 = Request Handled OK, 400 = Bad Request, 401 = Unauthorized
print(response.content.decode('utf8'))