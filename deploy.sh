rsync -avz -e 'ssh' ./build root@mlshv.me:/root/projects/s/
ssh root@mlshv.me "cd projects/s && git pull && pm2 restart server"
