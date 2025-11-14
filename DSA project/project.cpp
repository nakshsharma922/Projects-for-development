#include<iostream>
using namespace std;

class Hostel {
public:
    //student details
    string name;
    int uni_roll_no;
    int year;
    string branch;

    Hostel() {
        cout << "Enter name : ";
        getline(cin , name);
        cout  << "Enter university roll no. : ";
        cin >> uni_roll_no;
        cout << "Enter year : ";
        cin >> year;
        cout << "Enter branch : ";
        getline(cin , branch);
    }

    //virtual void trigger() = 0;
};

class HM : public Hostel {
public:

};

class ET : public Hostel {
public:

};

class PHM : public Hostel {
public:

};

int main() {
    Hostel s1;
    
}