package com.example.testarea;

public class SimpleEntity {
    private String quantity;
    private Boolean success;
    private String source;
    private String date;
    private String str;
    private String sym;
    private String name;
    private String sym2;
    private String name2;


    public SimpleEntity(Boolean success, String source, String date, String str, String sym, String name, String sym2, String name2, String quantity) {
        this.quantity = quantity;
        this.success = success;
        this.source = source;
        this.date = date;
        this.str = str;
        this.sym = sym;
        this.name = name;
        this.sym2 = sym2;
        this.name2 = name2;
    }

    public String getQuantity() {
        return quantity;
    }
}
