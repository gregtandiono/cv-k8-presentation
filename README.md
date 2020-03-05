# ClearView K8 Presentation

Pre-requisite:
- Docker
- Docker Compose
- Kubectl
- Minikube

## Important notes
Since we're not using docker hub to store our container images, we can use Minikube's docker environment to build and store our docker images instead.

```bash
# Run this in your terminal
eval $(minikube docker-env)

# Verify
docker images
```

Keep in mind that this will only remain accessible on the current shell session. If you switch to a new tab or new session, you will need to re-run the `eval` command to access the cluster's docker environment