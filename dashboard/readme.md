## Recommended

kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.3.1/aio/deploy/recommended.yaml

## Service Account

kubectl apply -f dashboard/service-account.yaml

## Proxy

kubectl proxy

## Fetch Token (Powershell)

kubectl -n kubernetes-dashboard describe secret $(kubectl -n kubernetes-dashboard get secret | sls admin-user | ForEach-Object { $\_ -Split '\s+' } | Select -First 1)
