terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.100.0"
    }
    
    null = {
      source = "hashicorp/null"
    }
  }
}

provider "azurerm" {
  features {}
  skip_provider_registration = true
}


resource "azurerm_resource_group" "rg" {
  name     = "rg-aks-portfolio"
  location = "East US 2"

  provisioner "local-exec" {
    when    = destroy
    command = "az group delete --name ${self.name} --yes --no-wait"
  }
}


resource "null_resource" "aks_cluster" {
  
  
  depends_on = [azurerm_resource_group.rg]

  
  provisioner "local-exec" {
    command = "az aks create --resource-group ${azurerm_resource_group.rg.name} --name aks-portfolio-cluster --node-count 1 --node-vm-size standard_b2s --generate-ssh-keys --location ${azurerm_resource_group.rg.location}"
  }
}


output "resource_group_name" {
  value = azurerm_resource_group.rg.name
}

output "cluster_name" {
  
  value = "aks-portfolio-cluster"
}