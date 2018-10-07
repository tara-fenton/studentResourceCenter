http://cloudmark.github.io/Hubot/

mkdir hubot

sudo npm install -g generator-hubot

yo hubot

? Owner tarafenton21@gmail.com
? Bot name tarbear
? Description A simple helpful robot for your Company
? Bot adapter slack

HUBOT_SLACK_TOKEN=xoxb-450864093458-450260014129-W4puv7g5QRzD6qRK2Xxb8aXW ./bin/hubot -a slack
