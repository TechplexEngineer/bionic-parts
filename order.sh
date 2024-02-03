#!/bin/bash

curl --location -X POST \
   -H "Content-Type:application/json" \
   -d \
'{
  "item": "fred",
  "part number": "test pn"
}' \
 'https://script.google.com/a/team4909.org/macros/s/AKfycbzWeROGIu3-TzXGCZVnJ6qSil0CTAr1oW9T3-HdNJnv13JSl8TQnZSZGyATmasvhbTrBg/exec'