#include<bits/stdc++.h>
#include<fstream>
using namespace std;

class chotu {
public:
    int* x;

    chotu(int data) {
        x = new int;
        *x = data;
    }

    chotu(const chotu& obj) {
        x = new int;
        *x = *(obj.x);
    }

    ~chotu() {
        delete x;
    }
};

class parent { 
public : 
    int a;
    virtual void show() {
        cout << "Parent class hai ye" << endl;
    }
};

class child : public parent { 
public:
    int b;
    void show() {
        cout << "Child class hai ye" <<endl;
    }
};


class top {
    public:
    int x;
};

class left : virtual public top {
    public:
    void show() {
        cout << "In Left class" << endl;
    }
};

class right : virtual public top {
    public:
    void show() {
        cout << "In Right class" << endl;
    }
};

class bottom : public left ,public right {
    public:
};


int main() {
    // chotu gadha(1000);
    // chotu adha = gadha;

    // cout << *(gadha.x) << endl;
    // cout << *(adha.x);

    // *(adha.x) = 2000;
    // cout << endl;

    // cout << *(gadha.x) << endl;
    // cout << *(adha.x);


    //         ---runtime polymorphism---
    // child* beta = new child();
    // parent* papa = beta;

    // papa->show();
    // beta->show();

    // bottom obj;
    // obj.left::show();
    // obj.right::show();

    fstream file("data.txt", ios::out);
    fstream file("data.txt", ios::in);
    fstream file("data.txt", ios::app);
    fstream file("data.txt", ios::binary);
    // if(!file.is_open()) {
    //     cerr << "Cannot open the file for writing" << endl;
    //     return 1;   
    // }

    file << "Hello world ye file me likh pa bhi rha hoon main ke nahi ??" << endl;
    file << "Line 2" << endl;
    file.close();
}