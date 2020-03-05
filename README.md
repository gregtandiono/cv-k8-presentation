# ClearView K8 Presentation

Google Slide Link (accessible only to CV members): https://docs.google.com/presentation/d/1i6vorgj06AGJ3vitxo1JN6EHE6hxT_KvKyMYanU_D5c/edit?usp=sharing

Pre-requisite:
- [Docker](https://docs.docker.com/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Kubectl (Kube Control)](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-linux)
- [Minikube](https://kubernetes.io/docs/setup/learning-environment/minikube/)

## Important notes

### Building container images into Minikube's docker environment
Since we're not using docker hub to store our container images, we can use Minikube's docker environment to build and store our docker images instead.

```bash
# Run this in your terminal
eval $(minikube docker-env)

# Verify
docker images
```

Keep in mind that this will only remain accessible on the current shell session. If you switch to a new tab or new session, you will need to re-run the `eval` command to access the cluster's docker environment

### Demo READMEs
The README assumes that you run every demo in sequence. If you choose to run them out of order, you may need to run
```bash
kubectl apply -f service.yml
```
If one of the demos is missing a `service` application step.
