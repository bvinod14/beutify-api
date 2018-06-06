export const APIJSON = {
  "variables": [],
  "info": {
    "name": "MSP-Collection",
    "_postman_id": "891735e7-e5ea-0990-3be5-46a6eed630d9",
    "description": "",
    "schema": "https://schema.getpostman.com/json/collection/v2.0.0/collection.json"
  },
  "item": [
    {
      "name": "SignInProfile",
      "request": {
        "url": "http://{{url}}/v2/auth/signInProfile",
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/x-www-form-urlencoded",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "grant_type=password&userId=renu6@gmail.com&password=Kohls123"
        },
        "description": "Authentication"
      },
      "response": []
    },
    {
      "name": "inventory by SKU",
      "request": {
        "url": "http://{{url}}/v1/inventory/sku/92481473",
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "SKU"
      },
      "response": []
    },
    {
      "name": "ProductDimension_DimentionID",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/catalog/4294719448?sortID=3&limit=24&offset=1",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "catalog",
            "4294719448"
          ],
          "query": [
            {
              "key": "sortID",
              "value": "3"
            },
            {
              "key": "limit",
              "value": "24"
            },
            {
              "key": "offset",
              "value": "1"
            }
          ],
          "variable": []
        },
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Catalog"
      },
      "response": []
    },
    {
      "name": "ProductDimension_Keyword",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/catalog?keyword=wedding registry",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "catalog"
          ],
          "query": [
            {
              "key": "keyword",
              "value": "wedding registry"
            }
          ],
          "variable": []
        },
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Catalog"
      },
      "response": []
    },
    {
      "name": "ProductforCategory",
      "request": {
        "url": "http://{{url}}/v1/catalog/category",
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Category"
      },
      "response": []
    },
    {
      "name": "Create Profile",
      "request": {
        "url": "http://{{url}}/v1/profile",
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"payload\":{\"profile\":{\"customerName\":{\"firstName\":\"Renu\",\"middleName\":null,\"lastName\":\"Sinha\"},\"password\":\"Kohls123\",\"email\":\"renu7@gmail.com\"}}}"
        },
        "description": "Profile"
      },
      "response": []
    },
    {
      "name": "Inventory By WebId",
      "request": {
        "url": "http://{{url}}/v1/inventory/webID/1758111",
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Inventory"
      },
      "response": []
    },
    {
      "name": "Price by SKU",
      "request": {
        "url": "http://{{url}}/v1/price/sku/92481473",
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Price"
      },
      "response": []
    },
    {
      "name": "Price by WebId",
      "request": {
        "url": "http://{{url}}/v1/price/webID/c27209",
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Price"
      },
      "response": []
    },
    {
      "name": "SingleProductDetail_SKU",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/products?skuCode=92481473&skuDetail=true",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "products"
          ],
          "query": [
            {
              "key": "skuCode",
              "value": "92481473"
            },
            {
              "key": "skuDetail",
              "value": "true"
            }
          ],
          "variable": []
        },
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Product"
      },
      "response": []
    },
    {
      "name": "SingleProductDetail_Webid",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/products/92481473?skuDetail=true&storeNum=994",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "products",
            "92481473"
          ],
          "query": [
            {
              "key": "skuDetail",
              "value": "true"
            },
            {
              "key": "storeNum",
              "value": "994"
            }
          ],
          "variable": []
        },
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Pragma",
            "value": "akamai-x-cache-on, akamai-x-cache-remote-on, akamai-x-check-cacheable, akamai-x-get-cache-key, akamai-x-get-extracted-values, akamai-x-get-nonces, akamai-x-get-ssl-client-session-id, akamai-x-get-true-cache-key, akamai-x-serial-no",
            "description": ""
          },
          {
            "key": "correlation-id",
            "value": "IOS-12345",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Product"
      },
      "response": []
    },
    {
      "name": "Product Item by WebId",
      "request": {
        "url": "http://{{url}}/v1/products/283028",
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Product"
      },
      "response": []
    },
    {
      "name": "Get Recommendations",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/recommendation?type=qq&webID=122&limit=1",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "recommendation"
          ],
          "query": [
            {
              "key": "type",
              "value": "qq"
            },
            {
              "key": "webID",
              "value": "122"
            },
            {
              "key": "limit",
              "value": "1"
            }
          ],
          "variable": []
        },
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Recommendations"
      },
      "response": []
    },
    {
      "name": "get cart",
      "request": {
        "url": "http://{{url}}/v1/cart",
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "w6UNGTAAupCaZ8026D520vt7KAe6",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"payload\": {\n    \"cart\": {\n      \"cartID\": \"882119072835\",\n      \"cartItems\": [{\n        \"skuCode\": \"94922967\",\n        \"qty\": 1,\n        \"action\": \"add\"\n      }]\n    }\n  }\n}"
        },
        "description": "Order"
      },
      "response": []
    },
    {
      "name": "Update Cart",
      "request": {
        "url": "http://{{url}}/v1/cart",
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "0ElEH8WCycRK1pARaaEwcB87FOOD",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"payload\": {\n    \"cart\": {\n      \"cartID\": \"881156226712\",\n      \"cartItems\": [{\n        \"skuCode\": \"94922967\",\n        \"qty\": 1,\n        \"action\": \"add\"\n      }]\n    }\n  }\n}"
        },
        "description": "Update Cart"
      },
      "response": []
    },
    {
      "name": "Order Calc V2",
      "request": {
        "url": {
          "raw": "http://{{url}}/v2/order/calculation?trEnabled=true",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v2",
            "order",
            "calculation"
          ],
          "query": [
            {
              "key": "trEnabled",
              "value": "true"
            }
          ],
          "variable": []
        },
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "w6UNGTAAupCaZ8026D520vt7KAe6",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"payload\": {\n    \"order\": {\n      \"cartID\":\"881156146278\",\n      \"cartItems\": [{\n        \"shippingMethod\": \"USSTD\",\n        \"skuCode\": \"94922967\",\n        \"bopusItem\": \"false\",\n        \"cartItemID\": \"1546001756\",\n        \"qty\": \"1\"\n      }],\n      \"checkBopusItemInventory\": \"false\"\n    }\n  }\n}"
        },
        "description": "Order Calc V2"
      },
      "response": []
    },
    {
      "name": "V2 Place Order",
      "request": {
        "url": {
          "raw": "http://{{url}}/v2/order?trEnabled=true",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v2",
            "order"
          ],
          "query": [
            {
              "key": "trEnabled",
              "value": "true"
            }
          ],
          "variable": []
        },
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "w6UNGTAAupCaZ8026D520vt7KAe6",
            "description": ""
          },
          {
            "key": "requestID",
            "value": "56667733",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"payload\": {\n    \"order\": {\n      \"cartID\":\"881156146278\",\n      \"customerName\": {\n                    \"firstName\": \"Renu\",\n                    \"lastName\": \"Sinha\"\n                },\n                \"email\": \"renus@gmail.com\",\n      \"cartItems\": [{\n        \"shippingMethod\": \"USSTD\",\n        \"skuCode\": \"94922967\",\n        \"bopusItem\": \"false\",\n        \"cartItemID\": \"1546001756\",\n        \"qty\": \"1\"\n      }],\n      \"billAddress\": {\n                    \"firstName\": \"Renu\",\n                    \"lastName\": \"Test\",\n                    \"addr1\": \"36707 San Pedro Dr\",\n                    \"city\": \"Fremont\",\n                    \"state\": \"CA\",\n                    \"postalCode\": \"94536\",\n                    \"phoneNumber\": \"2623276510\"\n                },\n                \"isBillAddressEqualtoShipAddress\": \"true\",\n                \"paymentTypes\": {\n                    \"creditCards\": [\n                        {\n                            \"nameOnCard\": \"Renu\",\n                            \"cardNum\": \"4445222299990007\",\n                            \"type\": \"Visa\",\n                            \"expDate\": \"12/2099\",\n                            \"securityCode\": \"222\"\n                        }\n                    ]\n                }\n    }\n  }\n}"
        },
        "description": "Order"
      },
      "response": []
    },
    {
      "name": "BV_GetSubmitQuestionForm",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/bzv/questionform?ProductId=2091958",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "bzv",
            "questionform"
          ],
          "query": [
            {
              "key": "ProductId",
              "value": "2091958"
            }
          ],
          "variable": []
        },
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "formdata",
          "formdata": [
            "<updateCartRequest xsi:noNamespaceSchemaLocation=\"cartRequest.xsd\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\">\n           <payload>\n<cart>\n                       <cartItems>\n                                   <cartItem>\n                                               <skuCode>92528116</skuCode>\n                                               <qty>4</qty>                      \n                                             <index>0</index>\n                                               <action>update</action>\n                                   </cartItem>\n                       </cartItems>\n</cart>\n           </payload>\n</updateCartRequest>"
          ]
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "submitQuestion",
      "request": {
        "url": "http://{{url}}/v1/bzv/questions",
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "UserId=2253999807330641&Action=submit&ContextDataValue_Age=55to65&useremail=testuser@gmail.com&QuestionSummary=Can I get those shipped&UserLocation=Spokane&ProductId=2679473&usernickname=testuser11"
        },
        "description": "BazarVoice"
      },
      "response": []
    },
    {
      "name": "BV QAndAs",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/bzv/QandAs?Limit=1&Include=Products&Offset=0&Filter=productId:2679473&Stats=Questions",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "bzv",
            "QandAs"
          ],
          "query": [
            {
              "key": "Limit",
              "value": "1"
            },
            {
              "key": "Include",
              "value": "Products"
            },
            {
              "key": "Offset",
              "value": "0"
            },
            {
              "key": "Filter",
              "value": "productId:2679473"
            },
            {
              "key": "Stats",
              "value": "Questions"
            }
          ],
          "variable": []
        },
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "BV SubmitAnswer",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/bzv/answers?action=submit",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "bzv",
            "answers"
          ],
          "query": [
            {
              "key": "action",
              "value": "submit"
            }
          ],
          "variable": []
        },
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "text/plain",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "QuestionId=645483&action=preview&UserEmail=renus11@kohls.com&UserId=2253999807330641&AnswerText=Frankly speaking, I dont know&UserNickname=renu11\n   "
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "BV Submit Review",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/bzv/reviews?action=submit",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "bzv",
            "reviews"
          ],
          "query": [
            {
              "key": "action",
              "value": "submit"
            }
          ],
          "variable": []
        },
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/x-www-form-urlencoded",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "UserNickname=renus&ReviewText=This is good&Title=Good product&Action=Submit&ProductId=2679473&Rating=3\n     "
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "BV Get Reviews",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/bzv/reviews?Limit=6&Offset=54&Include=Products&Filter=ProductId:2679473&Sort=SubmissionTime:desc&Stats=Reviews",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "bzv",
            "reviews"
          ],
          "query": [
            {
              "key": "Limit",
              "value": "6"
            },
            {
              "key": "Offset",
              "value": "54"
            },
            {
              "key": "Include",
              "value": "Products"
            },
            {
              "key": "Filter",
              "value": "ProductId:2679473"
            },
            {
              "key": "Sort",
              "value": "SubmissionTime:desc"
            },
            {
              "key": "Stats",
              "value": "Reviews"
            }
          ],
          "variable": []
        },
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "CMS",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/cms?campaignName=homeCampaign&pageName=homepage",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "cms"
          ],
          "query": [
            {
              "key": "campaignName",
              "value": "homeCampaign"
            },
            {
              "key": "pageName",
              "value": "homepage"
            }
          ],
          "variable": []
        },
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "SKU"
      },
      "response": []
    },
    {
      "name": "CMS-misc",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/cms?campaignName=miscCampaign&pageName=helpcontactus",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "cms"
          ],
          "query": [
            {
              "key": "campaignName",
              "value": "miscCampaign"
            },
            {
              "key": "pageName",
              "value": "helpcontactus"
            }
          ],
          "variable": []
        },
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "SKU"
      },
      "response": []
    },
    {
      "name": "Retrive Order for User",
      "request": {
        "url": "http://{{url}}/v1/orders",
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "nbcbNpxLJ2CyWRIRU8kPhPyzHhk2",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Order"
      },
      "response": []
    },
    {
      "name": "Retrive Order for User by order Id",
      "request": {
        "url": "http://{{url}}/v1/order/881156146267",
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "nbcbNpxLJ2CyWRIRU8kPhPyzHhk2",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Order"
      },
      "response": []
    },
    {
      "name": "VXO-OrderCalc",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/order/calculation?trEnabled=true",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "order",
            "calculation"
          ],
          "query": [
            {
              "key": "trEnabled",
              "value": "true"
            }
          ],
          "variable": []
        },
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"payload\" : {\n    \"order\" : {\n      \"customerName\" : {\n        \"firstName\" : \"Shank\",\n        \"middleName\" : null,\n        \"lastName\" : \"Chandran\"\n      },\n      \"email\" : \"shankarc44@gmail.com\",\n      \"cartItems\" : [ {\n        \"skuCode\" : \"88474910\",\n        \"qty\" : \"2\",\n        \"action\" : \"add\",\n        \"shippingMethod\" : \"USSTD\"\n      } ],\n      \"shippingMethod\" : \"USSTD\",\n      \"isBillAddressEqualtoShipAddress\" : \"true\",\n      \"paymentTypes\" : {\n        \"paymentDetails\" : \"VC\",\n        \"paymentToken\" : {\n          \"data\" : \"{\\\"encKey\\\":\\\"ijQrJzxVodFL4Ltdgo9ThRKkRGkVJHDzIiXJ5S39NigvCTxZ56F/aW3RKWXDON6DGwfmjOJAtCfl1RamLlmcla49+a6Xf9lNb0zqID7k8azmKpD4Tq7TN2ChfgjkHhi8\\\",\\\"encPaymentData\\\":\\\"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\\\",\\\"partialShippingAddress\\\":{\\\"countryCode\\\":\\\"US\\\",\\\"postalCode\\\":\\\"53224\\\"},\\\"callid\\\":\\\"6971667387027825101\\\",\\\"vInitRequest\\\":{\\\"apikey\\\":\\\"MADS6VYKLS1KHVVRAEZY13urtrbqfD3Jy24TlU25d9SnrmgcQ\\\",\\\"externalProfileId\\\":\\\"kohlsTabletProfile\\\",\\\"settings\\\":{\\\"countryCode\\\":\\\"US\\\",\\\"shipping\\\":{\\\"collectShipping\\\":\\\"true\\\",\\\"acceptedRegions\\\":[\\\"US\\\"]},\\\"review\\\":{\\\"message\\\":\\\"Continue to complete your order\\\",\\\"buttonAction\\\":\\\"Continue\\\"},\\\"widgetStyle\\\":\\\"OVERLAY\\\",\\\"displayName\\\":\\\"Kohls\\\",\\\"payment\\\":{\\\"billingCountries\\\":[\\\"US\\\"]}},\\\"paymentRequest\\\":{\\\"currencyCode\\\":\\\"USD\\\",\\\"total\\\":\\\"$78.08\\\"},\\\"parentUrl\\\":\\\"http://kstage10.skavaone.com/product/prd-1558059/croft-barrow-sole-senseability-comfort-moccasins-women.jsp\\\",\\\"browserLocale\\\":\\\"en_US\\\",\\\"clientId\\\":\\\"36681f35-c51f-4ed0-a5b7-39f5ea2a4990\\\",\\\"allowEnrollment\\\":true,\\\"bannerURL\\\":\\\"https://sandbox-assets.secure.checkout.visa.com/VmeCardArts/partner/headers/Kohls_vxo_customheader\\\"}}\"\n        }\n      }\n    }\n  }\n}"
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "ApplePay PlaceOrder",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/order?trEnabled=true",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "order"
          ],
          "query": [
            {
              "key": "trEnabled",
              "value": "true"
            }
          ],
          "variable": []
        },
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "requestID",
            "value": "55664433",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"payload\":{\"order\":{\"cartItems\":[{\"skuCode\":\"94735217\",\"qty\":1,\"bopusItem\":true,\"storeNum\":759}],\"paymentTypes\":{\"paymentDetails\":\"APPLEPAY\",\"paymentToken\":{\"version\":\"EC_v1\",\"data\":\"VpOS8XEAT1W7/TGzPJazljHUeetlqkIAEcYajkO+ty06FL3zi+Y98KrRO06kGbDLaxfv9oL9PfySOaMctQ5XwR7NkRC88f53PRMANRBpqjy2tdKnxEJBgkSf9jnOQJCiyn/HKFmdv6P5vzd98bXng910NsUfnxEuq23aFC8rvNUka5QKUNqTbm9MIwNZKsn0VclpYbsR5CyET9a7G+az3P7PedX3JimR3pMKCVySS9acDaXXkrha4puyw87guOOUKKjLlWhYq2sqXF0k4D+NzT8+E4kHrVc6J2N/Dki7bplxA4By8i/xeVAJIenRKEdJNJiWkwPmNTcSj5dIfpkgrG+M2yuPb9VkxStqc1SV59WJPAtUAaEDOhZRR9SNlLzXa6M/gaJalv9Jg0mzUOEmvOfGieI4oB5+AVuIgpJ/ORA=\",\"signature\":\"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\",\"header\":{\"ephemeralPublicKey\":\"MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE7iRMNIJ/wn9GhzRUNlupr1rb4HsRn30FtZmRyQVx5p8PzGtpi3BqriA/4D70DAfh97O0tWf4yZs02kui0z9uuA==\",\"publicKeyHash\":\"QxC1EEpqOzqy5ZuS9WOssMmBMoM7sx71lvjZcXpM8wE=\",\"transactionId\":\"3c4ae26cb681d37ff7826e035e841a8cefe7051385355441dc75d228bf6bcb9f\"}},\"creditCards\":[{\"nameOnCard\":\"Rohit\",\"cardNum\":\"\",\"type\":\"Visa\",\"expDate\":\"\"}]},\"billAddress\":{\"firstName\":\"Rohit\",\"lastName\":\"Nisal\",\"addr1\":\"1416 Calle Oriente\",\"addr2\":\"Apt 4\",\"city\":\"Milpitas\",\"state\":\"Ca\",\"postalCode\":\"95035\",\"phoneNumber\":\"9735191306\"},\"isBillAddressEqualtoShipAddress\":false,\"customerName\":{\"firstName\":\"Rohit\",\"lastName\":\"Nisal\"},\"email\":\"rohitnisal@gmail.com\"}}}"
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "BV Submit Review - Preview",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/bzv/reviews?action=preview",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "bzv",
            "reviews"
          ],
          "query": [
            {
              "key": "action",
              "value": "preview"
            }
          ],
          "variable": []
        },
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/x-www-form-urlencoded",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "UserNickname=renus&ReviewText=This is good&Title=Good product&Action=Submit&ProductId=2679473&Rating=3\n     "
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "Token",
      "request": {
        "url": "http://{{url}}/v1/auth/token",
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "urlencoded",
          "urlencoded": [
            {
              "key": "userId",
              "value": "test1001@test.com",
              "type": "text"
            },
            {
              "key": "password",
              "value": "qwerty",
              "type": "text"
            },
            {
              "key": "grant_type",
              "value": "password",
              "type": "text"
            },
            {
              "key": "client_id",
              "value": "51Lk9xDHemhGlvPu2pywYKBSmUSzteZm",
              "type": "text"
            },
            {
              "key": "secret",
              "value": "Ybjjhii532L7EIl3",
              "type": "text"
            }
          ]
        },
        "description": "Authentication"
      },
      "response": []
    },
    {
      "name": "RefreshToken",
      "request": {
        "url": "http://{{url}}/v1/auth/token",
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/x-www-form-urlencoded",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "grant_type=refresh_token&refresh_token=jygI1zQKnkAGixiAl8m1tHut5zZD2Ggs"
        },
        "description": "Authentication"
      },
      "response": []
    },
    {
      "name": "Lock Profile",
      "request": {
        "url": "http://{{url}}/v1/profile",
        "method": "PUT",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "ePgQFA9soVWAiAOuwDhUU2jK0Ahm",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"payload\": {\n    \"profile\": {\n    \"customerName\":{\n        \"firstName\": \"Renu\",\n        \"lastName\": \"Sinha\"\n      },\n      \"email\":\"renu6@gmail.com\",\n   \n  \n      \"lock\":false\n       \n      \n    }\n  }\n}"
        },
        "description": "Profile"
      },
      "response": []
    },
    {
      "name": "Update Billing Address",
      "request": {
        "url": "http://{{url}}/v1/profile/billAddress",
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "Rcfqs3fpKbc6pXB2eP8jRyhnJXe1",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"payload\": {\n    \"profile\": {\n      \"billAddress\": {\n        \"firstName\": \"Ani\",\n        \"lastName\": \"Test\",\n        \"addr1\": \"999 Main Street\",\n        \"city\": \"Waukesha\",\n        \"state\": \"WI\",\n        \"postalCode\": \"53188\",\n        \"phoneNumber\": \"2622223344\",\n        \"ID\": \"124234\",\n        \"preferredAddr\": \"true\",\n        \"action\": \"add\"\n      }\n    }\n  }\n}"
        },
        "description": "Profile"
      },
      "response": []
    },
    {
      "name": "Update Shipping Addess",
      "request": {
        "url": "http://{{url}}/v1/profile/shipAddress",
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "A7fhMUygBzgp95yNsuEIGAFwatJi",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"payload\": {\n    \"profile\": {\n      \"shipAddress\": {\n        \"firstName\": \"Ani\",\n        \"lastName\": \"Shekh\",\n        \"addr1\": \"999 Main Street\",\n        \"city\": \"Waukesha\",\n        \"state\": \"WI\",\n        \"postalCode\": \"53189\",\n        \"phoneNumber\": \"5102223399\",\n        \"ID\": \"124234\",\n        \"preferredAddr\": \"true\",\n        \"action\": \"add\"\n      }\n    }\n  }\n}"
        },
        "description": "Profile"
      },
      "response": []
    },
    {
      "name": "submit feedback",
      "request": {
        "url": "http://{{url}}/v1/bzv/feedback",
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/x-www-form-urlencoded",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "action=preview&ContentType=review&ContentId=6876718&UserId=null&FeedbackType=helpfulness&Vote=POSITIVE"
        },
        "description": "BazarVoice"
      },
      "response": []
    },
    {
      "name": "Validation Order by address",
      "request": {
        "url": "http://{{url}}/v1/validation",
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Validations"
      },
      "response": []
    },
    {
      "name": "Get Recommendations",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/recommendation?type=related&webID=122&limit=1",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "recommendation"
          ],
          "query": [
            {
              "key": "type",
              "value": "related"
            },
            {
              "key": "webID",
              "value": "122"
            },
            {
              "key": "limit",
              "value": "1"
            }
          ],
          "variable": []
        },
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Recommendations"
      },
      "response": []
    },
    {
      "name": "offers",
      "request": {
        "url": {
          "raw": "{{URL}}/v1/offers?offerType=PROMO123",
          "host": [
            "{{URL}}"
          ],
          "path": [
            "v1",
            "offers"
          ],
          "query": [
            {
              "key": "offerType",
              "value": "PROMO123",
              "equals": true,
              "description": ""
            }
          ],
          "variable": []
        },
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "X-APP-API_KEY",
            "value": "{{key}}",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Product"
      },
      "response": []
    },
    {
      "name": "offerProductLookup",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/offers/product?offerProducts=true&productId=1984836",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "offers",
            "product"
          ],
          "query": [
            {
              "key": "offerProducts",
              "value": "true"
            },
            {
              "key": "productId",
              "value": "1984836"
            }
          ],
          "variable": []
        },
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Product"
      },
      "response": []
    },
    {
      "name": "submitReview/form",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/bzv/answers?action=submit",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "bzv",
            "answers"
          ],
          "query": [
            {
              "key": "action",
              "value": "submit"
            }
          ],
          "variable": []
        },
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "urlencoded",
          "urlencoded": [
            {
              "key": "score",
              "value": "2",
              "type": "text"
            },
            {
              "key": "Rating",
              "value": "3",
              "type": "text"
            },
            {
              "key": "UserNickname",
              "value": "StevenChan",
              "type": "text"
            },
            {
              "key": "city",
              "value": "Milptas",
              "type": "text"
            },
            {
              "key": "contextdatavalue_stateOfResidence",
              "value": "CA",
              "type": "text"
            },
            {
              "key": "UserEmail",
              "value": "Steven.Chan@kohls.com",
              "type": "text"
            },
            {
              "key": "authorId",
              "value": "22539998073306413",
              "type": "text"
            },
            {
              "key": "User",
              "value": "",
              "type": "text"
            },
            {
              "key": "CampaignId",
              "value": "BV_MOBILE_RATING_SUMMARY",
              "type": "text"
            },
            {
              "key": "ProductId",
              "value": "222816",
              "type": "text"
            },
            {
              "key": "UserLocation",
              "value": "sasasas%2C+AZ",
              "type": "text"
            }
          ]
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "bzr voice",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/bzv/reviews?Include=Products&Limit=6&Offset=0&Filter=ProductID:1231955&Stats=Reviews&Sort=SubmissionTime:desc",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "bzv",
            "reviews"
          ],
          "query": [
            {
              "key": "Include",
              "value": "Products"
            },
            {
              "key": "Limit",
              "value": "6"
            },
            {
              "key": "Offset",
              "value": "0"
            },
            {
              "key": "Filter",
              "value": "ProductID:1231955"
            },
            {
              "key": "Stats",
              "value": "Reviews"
            },
            {
              "key": "Sort",
              "value": "SubmissionTime:desc"
            }
          ],
          "variable": []
        },
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "SKU"
      },
      "response": []
    },
    {
      "name": "config",
      "request": {
        "url": "http://{{url}}/v1/configures/client",
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Pragma",
            "value": "akamai-x-cache-on, akamai-x-cache-remote-on, akamai-x-check-cacheable, akamai-x-get-cache-key, akamai-x-get-extracted-values, akamai-x-get-nonces, akamai-x-get-ssl-client-session-id, akamai-x-get-true-cache-key, akamai-x-serial-no",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Catalog"
      },
      "response": []
    },
    {
      "name": "GetAllStores",
      "request": {
        "url": "http://{{url}}/v1/locations",
        "method": "GET",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Timestamp",
            "value": "1456351016",
            "description": ""
          },
          {
            "key": "LocationAuth",
            "value": "65732dbfba264ed54481403425e29ee8",
            "description": ""
          },
          {
            "key": "Pragma",
            "value": "akamai-x-cache-on, akamai-x-cache-remote-on, akamai-x-check-cacheable, akamai-x-get-cache-key, akamai-x-get-extracted-values, akamai-x-get-nonces, akamai-x-get-ssl-client-session-id, akamai-x-get-true-cache-key, akamai-x-serial-no, akamai-x-get-request-id, akamai-x-request-trace, akamai-x--meta-trace, akama-xi-get-extracted-values",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "Stores by radius",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/stores?postalCode=95035&radius=25",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "stores"
          ],
          "query": [
            {
              "key": "postalCode",
              "value": "95035"
            },
            {
              "key": "radius",
              "value": "25"
            }
          ],
          "variable": []
        },
        "method": "GET",
        "header": [
          {
            "key": "accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Order"
      },
      "response": []
    },
    {
      "name": "Delete payment",
      "request": {
        "url": "http://{{url}}/v1/profile/paymentType/usercc11250407",
        "method": "DELETE",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "A7fhMUygBzgp95yNsuEIGAFwatJi",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "X-Profile-Id",
            "value": "1222888",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Encoded wallet token to be passed for renew. Wrong token passed for renew"
      },
      "response": []
    },
    {
      "name": "revoke token",
      "request": {
        "url": "http://{{url}}/v2/auth/token",
        "method": "DELETE",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "UYs9vWnhQV0qogapjeMSJNMhqzZS",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Encoded wallet token to be passed for renew. Wrong token passed for renew"
      },
      "response": []
    },
    {
      "name": "update order",
      "request": {
        "url": "http://{{url}}/v1/order",
        "method": "PUT",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n\"payload\": {\n  \"orderNumber\": \"881156146267\",\n  \"postalCode\": \"60290\",\n  \"email\": \"renu6@gmail.com\",\n  \"action\":\"ADD_ALT_PICKUP\",\n  \"alternatePickUpPersons\": [{\n        \"firstName\": \"t\",\n        \"lastName\": \"test\",\n        \"email\": \"tet@gmail.com\"\n      }]\n}\n}\n"
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "updateCart Promocode",
      "request": {
        "url": "http://{{url}}/v1/cart",
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "U9e0AN9nwvTFByOeIp0FKy0HMo09",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"payload\":{\"cart\":{\"cartID\":\"881156146278\",\"paymentTypes\":{\"promoCodes\":{\"promoCode\":[]},\"kohlsCash\":{\"voucher\":[{\"kohlsCashNum\":\"1779185900103444\",\"pin\":\"3048\",\"action\":\"add\"}]}}}}}"
        },
        "description": "Order"
      },
      "response": []
    },
    {
      "name": "customerLookup",
      "request": {
        "url": "http://{{url}}/v1/customer",
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "1zKlGW1fEdXLb1g6XLVG7yxdPwkR",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"payload\":{\"action\":\"lookupby_intKCC_zip\",\"lookupBy\":\"internalToken:843676441901,zipCode:35630\"}} "
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "updatePassword",
      "request": {
        "url": "http://{{url}}/v1/profile",
        "method": "PUT",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "9LKGHvY23zLk7uf34Xejkmh13IHJ",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"payload\":{\"profile\":{\"customerName\":{\"firstName\":\"Renu\",\"middleName\":null,\"lastName\":\"Sinha\"},\"password\":\"Kohls999\",\"email\":\"renu6@gmail.com\"}}}"
        },
        "description": "Profile"
      },
      "response": []
    },
    {
      "name": "EstmatePayment",
      "request": {
        "url": "http://{{url}}/v1/order/estimatePayment",
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "requestID",
            "value": "",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Order"
      },
      "response": []
    },
    {
      "name": "forgotPassword",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/profile/forgotPassword?email=renu6@gmail.com",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "profile",
            "forgotPassword"
          ],
          "query": [
            {
              "key": "email",
              "value": "renu6@gmail.com"
            }
          ],
          "variable": []
        },
        "method": "GET",
        "header": [
          {
            "key": "X-APP-API_KEY",
            "value": "9LKGHvY23zLk7uf34Xejkmh13IHJ",
            "description": ""
          },
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "Flush Cache",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/caching/namespaces?cname=catalogs",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "caching",
            "namespaces"
          ],
          "query": [
            {
              "key": "cname",
              "value": "catalogs"
            }
          ],
          "variable": []
        },
        "method": "DELETE",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "BazarVoice"
      },
      "response": []
    },
    {
      "name": "Flush Cache Entry",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/caching/entry?cname=offers&key=123",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "caching",
            "entry"
          ],
          "query": [
            {
              "key": "cname",
              "value": "offers"
            },
            {
              "key": "key",
              "value": "123"
            }
          ],
          "variable": []
        },
        "method": "DELETE",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "BazarVoice"
      },
      "response": []
    },
    {
      "name": "cacheStats",
      "request": {
        "url": "http://{{url}}/v1/caching/stats",
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "FlushCacheCatalog",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/caching/namespaces?cname=catalogs",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "caching",
            "namespaces"
          ],
          "query": [
            {
              "key": "cname",
              "value": "catalogs"
            }
          ],
          "variable": []
        },
        "method": "DELETE",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "X-MAC",
            "value": "dc3442fc67cd79bfdaec18c8771b93518d036e8e0300c19bdad2a12ba320171f",
            "description": ""
          },
          {
            "key": "X-MAC-Id",
            "value": "o6oct2014",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "BazarVoice"
      },
      "response": []
    },
    {
      "name": "Delete Shipping Address",
      "request": {
        "url": "http://{{url}}/v1/profile/shipAddress/600000000025227729",
        "method": "DELETE",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "A7fhMUygBzgp95yNsuEIGAFwatJi",
            "description": ""
          },
          {
            "key": "X-Profile-Id",
            "value": "12345678",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "True-Client-IP",
            "value": "192.168.1.1",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": "Profile"
      },
      "response": []
    },
    {
      "name": "VXO Place Order",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/order?trEnabled=true",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "order"
          ],
          "query": [
            {
              "key": "trEnabled",
              "value": "true"
            }
          ],
          "variable": []
        },
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "requestID",
            "value": "57778855",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\r\n  \"payload\" : {\r\n    \"order\" : {\r\n      \"customerName\" : {\r\n        \"firstName\" : \"Shank\",\r\n        \"middleName\" : null,\r\n        \"lastName\" : \"Chandran\"\r\n      },\r\n      \"email\" : \"shankarc44@gmail.com\",\r\n      \"cartItems\" : [ {\r\n        \"skuCode\" : \"88474910\",\r\n        \"qty\" : \"2\",\r\n        \"action\" : \"add\",\r\n        \"shippingMethod\" : \"USSTD\"\r\n      } ],\r\n      \"shippingMethod\" : \"USSTD\",\r\n      \"isBillAddressEqualtoShipAddress\" : \"true\",\r\n      \"paymentTypes\" : {\r\n        \"paymentDetails\" : \"VC\",\r\n        \"paymentToken\" : {\r\n          \"data\" : \"{\\\"encKey\\\":\\\"ijQrJzxVodFL4Ltdgo9ThRKkRGkVJHDzIiXJ5S39NigvCTxZ56F/aW3RKWXDON6DGwfmjOJAtCfl1RamLlmcla49+a6Xf9lNb0zqID7k8azmKpD4Tq7TN2ChfgjkHhi8\\\",\\\"encPaymentData\\\":\\\"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\\\",\\\"partialShippingAddress\\\":{\\\"countryCode\\\":\\\"US\\\",\\\"postalCode\\\":\\\"53224\\\"},\\\"callid\\\":\\\"6971667387027825101\\\",\\\"vInitRequest\\\":{\\\"apikey\\\":\\\"MADS6VYKLS1KHVVRAEZY13urtrbqfD3Jy24TlU25d9SnrmgcQ\\\",\\\"externalProfileId\\\":\\\"kohlsTabletProfile\\\",\\\"settings\\\":{\\\"countryCode\\\":\\\"US\\\",\\\"shipping\\\":{\\\"collectShipping\\\":\\\"true\\\",\\\"acceptedRegions\\\":[\\\"US\\\"]},\\\"review\\\":{\\\"message\\\":\\\"Continue to complete your order\\\",\\\"buttonAction\\\":\\\"Continue\\\"},\\\"widgetStyle\\\":\\\"OVERLAY\\\",\\\"displayName\\\":\\\"Kohls\\\",\\\"payment\\\":{\\\"billingCountries\\\":[\\\"US\\\"]}},\\\"paymentRequest\\\":{\\\"currencyCode\\\":\\\"USD\\\",\\\"total\\\":\\\"$78.08\\\"},\\\"parentUrl\\\":\\\"http://kstage10.skavaone.com/product/prd-1558059/croft-barrow-sole-senseability-comfort-moccasins-women.jsp\\\",\\\"browserLocale\\\":\\\"en_US\\\",\\\"clientId\\\":\\\"36681f35-c51f-4ed0-a5b7-39f5ea2a4990\\\",\\\"allowEnrollment\\\":true,\\\"bannerURL\\\":\\\"https://sandbox-assets.secure.checkout.visa.com/VmeCardArts/partner/headers/Kohls_vxo_customheader\\\"}}\"\r\n        }\r\n      }\r\n    }\r\n  }\r\n}"
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "Update payment type",
      "request": {
        "url": "http://{{url}}/v1/profile/paymentType",
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "A7fhMUygBzgp95yNsuEIGAFwatJi",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\r\n  \"payload\" : {\r\n    \"profile\" : {\r\n      \"paymentType\" : {\r\n        \"nameOnCard\" : \"RenuSinha\",\r\n        \"cardNum\" : \"4445222299990007\",\r\n        \"type\" : \"VISA\",\r\n        \"expDate\" : \"02/2025\",\r\n        \"preferredPaymentType\" : \"false\",\r\n        \"action\" : \"add\"\r\n      }\r\n    }\r\n  }\r\n}"
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "EDE Recommendation",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/ede/recommendations?cid=AndroidApp&pgid=PDP&plids=Horizontal1&ccp=ewoicHJvZHVjdE51bWJlcnMiOiAxMDgzNjU4Cn0%3D",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "ede",
            "recommendations"
          ],
          "query": [
            {
              "key": "cid",
              "value": "AndroidApp"
            },
            {
              "key": "pgid",
              "value": "PDP"
            },
            {
              "key": "plids",
              "value": "Horizontal1"
            },
            {
              "key": "ccp",
              "value": "ewoicHJvZHVjdE51bWJlcnMiOiAxMDgzNjU4Cn0%3D"
            }
          ],
          "variable": []
        },
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "KohlsCash Balance",
      "request": {
        "url": "http://{{url}}/v1/kohlsCash",
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n    \"payload\": {\n      \"kohlsCashCoupons\": [\n          {\n            \"ID\": \"1\",\n            \"kohlsCashNum\": \"142779286232069\",\n            \"pin\": \"1234\"\n          }\n          ]\n    \n  }\n}\n"
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "KohlsCash Balance Bulk",
      "request": {
        "url": "http://{{url}}/v1/kohlsCash",
        "method": "OPTIONS",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"payload\": {\n    \"kohlsCashCoupons\": [{\n      \"ID\": \"1\",\n      \"kohlsCashNum\": \"142779286232069\",\n      \"pin\": \"1234\"\n    }, {\n      \"ID\": \"2\",\n      \"kohlsCashNum\": \"142779286232070\",\n      \"pin\": \"3456\"\n    }, {\n      \"ID\": \"3\",\n      \"kohlsCashNum\": \"142779286232071\",\n      \"pin\": \"2456\"\n    }]\n  }\n}"
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "Configuration Resources appmessages",
      "request": {
        "url": "http://{{url}}/v1/resources/appmessages",
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "Configuration Resources monetization",
      "request": {
        "url": "http://{{url}}/v1/resources/monetization",
        "method": "GET",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "Verify Password",
      "request": {
        "url": "http://{{url}}/v1/profile/password",
        "method": "GET",
        "header": [
          {
            "key": "X-APP-API_KEY",
            "value": "9LKGHvY23zLk7uf34Xejkmh13IHJ",
            "description": ""
          },
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": ""
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "MasterPass RequestData",
      "request": {
        "url": {
          "raw": "http://{{url}}/v1/payments/masterpass/requestdata?brandID=nativeapp",
          "protocol": "http",
          "host": [
            "{{url}}"
          ],
          "path": [
            "v1",
            "payments",
            "masterpass",
            "requestdata"
          ],
          "query": [
            {
              "key": "brandID",
              "value": "nativeapp"
            }
          ],
          "variable": []
        },
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"payload\" : {\n    \"originURL\" : \"http://mydomain.com\",\n    \"callbackURL\" : \"http://mydomain.com/callback\",\n    \"cartTotal\" : \"4304\"\n  }\n}"
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "Cancel order",
      "request": {
        "url": "http://{{url}}/v1/order",
        "method": "PUT",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"payload\" : {\n    \"orderNumber\" : \"881156226712\",\n    \"postalCode\" : \"94536\",\n    \"email\" : \"renu7@gmail.com\",\n    \"action\" : \"cancel_order\"\n  }\n}\n"
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "http://{{url}}/v1/cart",
      "request": {
        "url": "http://{{url}}/v1/cart",
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "2AvHEWf0H3K325g6Q2dhoHM2J4WX",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"payload\": {\n    \"cart\": {\n      \"cartID\": \"881156226712\",\n      \"cartItems\": [{\n        \"skuCode\": \"94922967\",\n        \"qty\": 1,\n        \"action\": \"add\"\n      }]\n    }\n  }\n}"
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "UpdateCart - promocode",
      "request": {
        "url": "http://{{url}}/v1/cart",
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "2AvHEWf0H3K325g6Q2dhoHM2J4WX",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\n  \"payload\": {\n    \"cart\": {\n      \"cartID\": \"881156246397\",\n      \"paymentTypes\": [{\n        \"promoCode\": [{\n          \"code\": \"WALLETTEST1\",\n          \"qty\": 5,\n          \"action\": \"add\"\n        }],\n        \"kohlsCash\": [{\n          \"kohlsCashNum\": \"142777357535832\",\n          \"pin\": \"7080\",\n          \"action\": \"add\"\n        }]\n      }]\n    }\n  }\n}"
        },
        "description": ""
      },
      "response": []
    },
    {
      "name": "SignInProfile - Device FingerPrinting",
      "request": {
        "url": "http://{{url}}/v2/auth/signInProfile",
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/x-www-form-urlencoded",
            "description": ""
          },
          {
            "key": "X-APP-API_SESSIONID",
            "value": "0000lbn5agpNtTmXnnqnSp_Cy26:mfp-wlprod12-Dal06-MfpProdSrv01",
            "description": ""
          },
          {
            "key": "User-Agent",
            "value": "Mozilla%2F5.0%20(Windows%20NT%206.1%3B%20rv% 3A31.0)%20Gecko%2F20130401%20Firefox%2F31.0",
            "description": ""
          },
          {
            "key": "X-Forwarded-For",
            "value": "69.61.127.67, 165.254.45.181",
            "description": ""
          },
          {
            "key": "True-Client-IP",
            "value": "70.198.50.215",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "grant_type=password&userId=renu7@gmail.com&password=Kohls123"
        },
        "description": "Authentication"
      },
      "response": []
    },
    {
      "name": "Order Calc V2 new",
      "request": {
        "url": {
          "raw": "https://{{FQ4}}/api/v2/order/calculation?trEnabled=true",
          "protocol": "https",
          "host": [
            "{{FQ4}}"
          ],
          "path": [
            "api",
            "v2",
            "order",
            "calculation"
          ],
          "query": [
            {
              "key": "trEnabled",
              "value": "true",
              "equals": true,
              "description": ""
            }
          ],
          "variable": []
        },
        "method": "POST",
        "header": [
          {
            "key": "Accept",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "Content-Type",
            "value": "application/json",
            "description": ""
          },
          {
            "key": "access_token",
            "value": "PVrRaFARrNctPG6GUVzeQVzloGA4",
            "description": ""
          }
        ],
        "body": {
          "mode": "raw",
          "raw": "{\"payload\":{\"order\":{\"paymentTypes\":{\"creditCards\":[{\"nameOnCard\":\"--\",\"cardNum\":\"1111\",\"type\":\"VISA\",\"expDate\":\"01/2018\",\"isExpeditedCheckout\":true}]},\"billAddress\":{\"firstName\":\"bb\",\"lastName\":\"bb\",\"addr1\":\"Milpitas, CA 95035, USA\",\"addr2\":\"\",\"city\":\"Milpitas\",\"state\":\"CA\",\"postalCode\":\"95035\",\"phoneNumber\":\"9876432222\",\"countryCode\":\"US\"},\"isBillAddressEqualtoShipAddress\":false,\"shipAddress\":{\"firstName\":\"retye\",\"lastName\":\"weryetyj\",\"addr1\":\"Milpitas, CA 95035, USA\",\"addr2\":\"\",\"city\":\"Milpitas\",\"state\":\"CA\",\"postalCode\":\"95035\",\"phoneNumber\":\"3465747895\",\"countryCode\":\"US\",\"shipIndex\":1},\"customerName\":{\"firstName\":\"amal\",\"lastName\":\"ch\"},\"email\":\"amal@ech.com\",\"checkBopusItemInventory\":false}}}"
        },
        "description": "Order Calc V2"
      },
      "response": []
    }
  ]
}