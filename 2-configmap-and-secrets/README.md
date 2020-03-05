# Storing environment variables in configmaps and secrets

```bash
# Build container images
docker-compose build

# Apply secret
kubectl apply -f secret.yml

# Verify secret
kubectl get secrets
kubectl describe secrets <SECRET_NAME>

# Apply configmap
kubectl apply -f configmap.yml

# Verify configmap
kubectl get configmap
kubectl describe configmap <CONFIGMAP_NAME>

# Deploy changes
kubectl apply -f deployment.yml

# Confirm pod update
kubectl get pods
kubectl describe pods <POD_NAME>

# Verify changes from `app-0` changes
curl -L <MINIKUBE_IP>:<NODE_PORT>
curl -L <MINIKUBE_IP>:<NODE_PORT>/get-secret-url
```