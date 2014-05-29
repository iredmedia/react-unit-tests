# Now we have to set the DISPLAY env variable so Firefox and Chrome know where to open the browser.
export DISPLAY=:99

grunt test

cp -avr src /usr/share/nginx/www/src
cp -avr bower_components /usr/share/nginx/www/bower_components

cd func_tests
./runtests.py
