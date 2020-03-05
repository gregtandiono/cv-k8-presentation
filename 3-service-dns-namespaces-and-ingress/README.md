# Storing environment variables in configmaps and secrets

```bash
# Build container images
docker-compose build

# Apply configmap to reflect new variable
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
curl -L <MINIKUBE_IP>:<NODE_PORT>/get-external-service-status
```

## Namespaces

```bash
# Create new namespaces
kubectl apply -f namespace.yml

# Safely switch namespaces using context
kubectl config set-context staging --namespace=staging
# If you're switching between different cluster providers, you have to specify cluster name and user
kubectl config set-context remote-staging --namespace=staging --cluster=gke_user_1390_us-central1a-production --user=gke_user_1390_us-central1a-production

# Safely switch between context to access namespaces
kubectl config use-context staging

# Verify switch
kubectl config current-context
kubectl get pods # should only show pod resources in the namespace
kubectl get pods -n default # should show pods from the `default` namespace

# Switch back to default namespace
kubectl config use-context default
```
