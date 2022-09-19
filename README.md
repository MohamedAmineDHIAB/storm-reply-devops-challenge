# Storm Reply DevOps challenge :fire:

### Tools needed :package: :

-   `kubectl==1.25`
-   `minikube==1.27.0`
-   `terraform==1.2.9`
-   `docker==20.10.17`

### How to use :runner: :

1- Include your AWS credentials (with access to S3 ressources) by:

-   changing the attribute value for the variables `ACCESS_KEY_ID` and `SECRET_ACCESS_KEY` in the files `./k8s/qa.yml` and `./k8s/staging.yml`
-   changing the default value for the variables `access_key` and `private_key` in the file `./s3/variables.tf`

2- Create the defined S3 buckets using terraform :

```
cd s3 \
&& terraform init \
&& terraform apply
```

3- Start the cronjobs which are responsible of writing a new file to S3 buckets resp. QA bucket and Staging bucket :
` kubectl apply -f ./k8s/qa.yml`
resp.
` kubectl apply -f ./k8s/staging.yml`
