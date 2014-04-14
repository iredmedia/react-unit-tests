sudo /etc/init.d/xvfb start

# Now we have to set the DISPLAY env variable so Firefox and Chrome know where to open the browser.
export DISPLAY=:99

grunt test

# python -m SimpleHTTPServer
# /usr/share/nginx/www
cp src /usr/share/nginx/www/src

cd func_tests
./runtests.py