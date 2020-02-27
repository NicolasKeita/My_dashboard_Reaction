package com.example.testarea;

public class SimpleEntity {
    private String quantity;


    public SimpleEntity(Boolean success, String source, String date, String str, String sym, String name, String sym2, String name2, String quantity) {
        this.quantity = quantity;
    }

    public String getQuantity() {
        return quantity;
    }
}
