# bamazon
Amazon-like storefront

## Overview

This is an Amazon-like storefront. The app will take in orders from customers and deplete stock from the store's inventory. The manager function will allow to add to inventory,  view low stock items and add new inventory items.

### Running the Application

On your terminal type  **node bamazon** and you will be presented with the following screen

![Bamazon Options](https://manderson55.github.io/bamazon/images/bamazon_NodeBamazon.png)


### Customer View

If you choose Customer you will be presented with this screen

![Customer Order](https://manderson55.github.io/bamazon/images/bamazon_CustomerOptionSelected.png)

If there is not enough inventory for the purchase, the user wil be presented with this screen

![Low stock image](https://manderson55.github.io/bamazon/images/bamazonCustomer_lowStock.png)

and then they can modify their order.

### Manager view

If you choose Manager you will be presented with this set of options:

    * View Products for Sale
    
    * View Low Inventory
    
    * Add to Inventory
    
    * Add New Product

##### Manager Options Screen

![Manager Options](https://manderson55.github.io/bamazon/images/bamazon_ManagerOptionSelected.png)

##### Manager Option: View Products for Sale

If a manager selects `View Products for Sale`, the app will list every available item: the item IDs, names, prices, and quantities.


![Manager Options Sale Products](https://manderson55.github.io/bamazon/images/bamazonCustomer_saleProducts.png)

##### Manager Option: View Low Inventory

If a manager selects `View Low Inventory`, then it will list all items with an inventory count lower than five.

![Manager Options Low Inventory](https://manderson55.github.io/bamazon/images/bamazonManager_lowInventory.png)

##### Manager Option: Add to Inventory

If a manager selects `Add to Inventory`, the app will display a prompt that will let the manager "add more" of any item currently in the store.


![Manager Options Add to Inventory](https://manderson55.github.io/bamazon/images/bamazonManager_addToInventory.png)

##### Manager Option: Add New Product

If a manager selects `Add New Product`, it will allow the manager to add a completely new product to the store.


![Manager Options Add to Inventory](https://manderson55.github.io/bamazon/images/bamazonManager_addNewProduct.png)



