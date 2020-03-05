# Deployment and Service Resource

```bash
# Build your container images
docker-compose build

# Apply deployment manifest
kubectl apply -f deployment.yml

# Confirm deployment
kubectl get deployments
kubectl describe deployments <DEPLOYMENT_NAME>

# Confirm pods
kubectl get pods
kubectl describe pods <POD_NAME>

# Interact with application within a pod
kubectl exec -it <POD_NAME> sh

# Apply service manifest
kubectl apply -f service.yml

# Confirm service
kubectl get services
kubectl describe services <SERVICE_NAME>

# Confirm service NodePort
curl -L <MINIKUBE_IP>:<NODE_PORT>
```