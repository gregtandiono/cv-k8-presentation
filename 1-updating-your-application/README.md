# Rolling updates & Rollbacks

## Rolling updates

```bash
# Update your container images
docker-compose build

# Apply changes from your deployment manifest
kubectl apply -f deployment.yml

# Confirm pod update
kubectl get pods
kubectl describe pods <POD_NAME> # check container image version

# Verify changes from `app-0` changes
curl -L <MINIKUBE_IP>:<NODE_PORT>/status
```

## Rollback to previous deployment
```bash
# Perform rollback
kubectl rollbout undo deployment <DEPLOYMENT_NAME>

# Confirm pod update
kubectl get pods
kubectl describe pods <POD_NAME> # check container image version

# Verify rollback
curl -L <MINIKUBE_IP>:<NODE_PORT>/status # should return a 404
```