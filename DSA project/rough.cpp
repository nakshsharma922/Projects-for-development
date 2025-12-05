#include<iostream>
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

int main() {
    // chotu gadha(1000);
    // chotu adha = gadha;

    // cout << *(gadha.x) << endl;
    // cout << *(adha.x);

    // *(adha.x) = 2000;
    // cout << endl;

    // cout << *(gadha.x) << endl;
    // cout << *(adha.x);


    

}