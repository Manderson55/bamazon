# bamazon
Amazon-like storefront

## Overview

This is an Amazon-like storefront. The app will take in orders from customers and deplete stock from the store's inventory. 

### Customer view: node bamazonCustomer

Once you type Node bamazonCustomer the user will be presented with this screen

![GitHub Logo]{images/bamazonCustomer_order.png}
Format: ![Alt Text](url)


If there is not enough inventory for the purchase, the user wil be presented with this screen

![GitHub Logo]{images/bamazonCustomer_lowStock.png}
Format: ![Alt Text](url)

and then they can modify their order.

### Manager view: node bamazonManager

* bamazonManager.js. Running this application will:

  * List a set of menu options:

    * View Products for Sale
    
    * View Low Inventory
    
    * Add to Inventory
    
    * Add New Product

  * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.

  ![GitHub Logo]{images/bamazonManager_saleProducts.png}
Format: ![Alt Text](url)

  * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.

    ![GitHub Logo]{images/bamazonManager_lowInventory.png}
Format: ![Alt Text](url)

  * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.

    ![GitHub Logo]{images/bamazonManager_addToInventory.png}
Format: ![Alt Text](url)

  * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.


    ![GitHub Logo]{images/bamazonManager_addNewProduct.png}
Format: ![Alt Text](url)

- - -

- - -

