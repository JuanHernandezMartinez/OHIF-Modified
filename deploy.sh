yarn build

cp -r platform/app/dist /var/www/html

systemctl restart nginx.service
