# Hosting
    
    1. AWS EC2 Container
    2. NGINX reverse proxy/server for API and main hosting
        * Edit /etc/nginx/sites-available/default for config
        * Web hosting redirects to index.html file, API is hosted using ExpressJS and runs on 4200 (forwarded by Nginx)
    3. Ubuntu 14.04
    4. Cloudflare DNS and security (Joey Lehrman has the details)


# Design 
    
    1. Angular 2/Typescript
    2. MDBootstrap (https://mdbootstrap.com for docs)
    
# What needs to be done

    1. API needs to be either rewritten or edited so it accesses a database. Currently, data is pulled from a Google Sheets page
    2. MySQL database with data imported setup on port 2123, is ready for use.
    3. CMS solution so pages can be added based on certain themes, and database can have new entries or current entries edited

# How to access/upload files
    
    1. Setup PUTTY
        * Download and install putty for your system, should be available online
        * In IP bar put the IP of the actual host, NOT Cloudflare's
        * Click on the plus next to SSH under Connection on the left side menu
        * Click on Auth, then click browse and select the key file for the server (ppk)
        * Go back to main screen (click Session on left menu) and save it as an appropriate name
    2. Setup FileZilla
        * Install FileZilla client
        * Click on file in the menu at the absolute top of the page, then site manager
        * Create new site, and set protocol as SFTP (should be a dropdown)
        * Enter same host and port as Putty (EC2 IP and port 22)
        * Select key file for logon type, and select the key file.
        * Save and connect, username is ubuntu
    3. Once files ready for upload
        * Open FileZilla, connect, and navigate to the home folder (on your computer) for the project
        * On the right, navigate to /home/ubuntu/website-files for production hosting, and /home/ubuntu/website-test for testing hosting
        * Drag and drop files for upload/rewrite
        * Launch putty and connect
        * For updating production: type command cd /home/ubuntu/website-files && ng build --prod
        * For updating testing: type command cd /home/ubuntu/website-test && ng build --prod
    4. Just a note, the compilation may freeze in the middle occasionally, clicking enter/return or ctrl (command on mac)+c should get it working again. 
    
    
# Contacting me (Yadunandan Pillai)

    1. Email: ytpillai@gmail.com
    2. Hangouts: same as above
    3. I'm normally checking my Google Hangouts, bit less responsive on email
    4. I'm generally responsive late nights as well, for those in different time zones. 