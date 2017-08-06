# bamazon
Amazon-like storefront

## Overview

This is an Amazon-like storefront. The app will take in orders from customers and deplete stock from the store's inventory. The manager function will allow to add to inventory,  view low stock items and add new inventory items.


### Customer view: node bamazonCustomer

Once you type Node bamazonCustomer the user will be presented with this screen

[Customer Order](https://manderson55.github.io/bamazon/images/bamazonCustomer_order.png)

If there is not enough inventory for the purchase, the user wil be presented with this screen

![Low stock image](https://manderson55.github.io/bamazon/images/bamazonCustomer_lowStock.png)

and then they can modify their order.

### Manager view: node bamazonManager

* bamazonManager.js. Running this application will:

  * List a set of menu options:

    * View Products for Sale
    
    * View Low Inventory
    
    * Add to Inventory
    
    * Add New Product


![Manager Options](https://manderson55.github.io/bamazon/images/bamazonManager_options.png)

  * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.


![Manager Options Sale Products](https://manderson55.github.io/bamazon/images/bamazonManager_saleProducts.png)

  * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.

![Manager Options Low Inventory](https://manderson55.github.io/bamazon/images/bamazonManager_lowInventory.png)

  * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.


![Manager Options Add to Inventory](https://manderson55.github.io/bamazon/images/bamazonManager_addToInventory.png)

  * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.


![Manager Options Add to Inventory](https://manderson55.github.io/bamazon/images/bamazonManager_addNewProduct.png)



