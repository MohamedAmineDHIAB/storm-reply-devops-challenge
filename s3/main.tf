provider "aws"{
    region = "eu-west-1"
    access_key = var.access_key
    secret_key = var.secret_key
}

resource "aws_s3_bucket" "qa" {
    bucket="qa-mohamed-dhiab-stormreply-platform-challenge"
    acl="private"
    tags={
        Name="qa-mohamed-dhiab-stormreply-platform-challenge"
    }
    lifecycle_rule {
    enabled = true

    expiration {
      days = 1
    }
  }
}
resource "aws_s3_bucket" "staging" {
    bucket="staging-mohamed-dhiab-stormreply-platform-challenge"
    acl="private"
    tags={
        Name="staging-mohamed-dhiab-stormreply-platform-challenge"
    }
    lifecycle_rule {
    enabled = true

    expiration {
      days = 1
    }
  }
}