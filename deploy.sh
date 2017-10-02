rsync -avz -e 'ssh' ./build root@mlshv.me:/root/projects/s/
ssh root@mlshv.me "pm2 restart server"
