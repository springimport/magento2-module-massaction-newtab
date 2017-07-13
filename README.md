# Mass Action new tab
Allow open mass actions in new tabs.

# Install
Enable module:
```
php -f bin/magento module:enable SpringImport_MassActionNewTab
```

Disable module:
```
php -f bin/magento module:disable SpringImport_MassActionNewTab
```

Update system:
```
php -f bin/magento setup:upgrade
```

# Using
For setup action, create `Vendor/Module/view/adminhtml/ui_component/sales_order_grid.xml` and set `inNewTab` to `true`.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<listing xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  xsi:noNamespaceSchemaLocation="urn:magento:framework:Ui/etc/ui_configuration.xsd">
    <listingToolbar name="listing_top">
        <massaction name="listing_massaction">
            <action name="print_shipping_label">
                <argument name="data" xsi:type="array">
                    <item name="config" xsi:type="array">
                        <item name="inNewTab" xsi:type="boolean">true</item>
                    </item>
                </argument>
            </action>
        </massaction>
    </listingToolbar>
</listing>
```
