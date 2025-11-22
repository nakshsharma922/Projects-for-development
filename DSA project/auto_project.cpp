#include <bits/stdc++.h>
using namespace std;

struct Student {
    string name;
    int roll;
    int year;
};

struct Room {
    int roomNo;
    int capacity;
    vector<Student> occupants;
};

class HostelSystem {
    vector<Room> rooms;
    queue<Student> waitlist;
    map<int, int> studentRoom;   // roll → roomNo

public:
    HostelSystem() {
        // Sample rooms (you can add more)
        rooms.push_back({101, 2, {}});
        rooms.push_back({102, 2, {}});
        rooms.push_back({103, 1, {}});
    }

    void registerStudent() {
        Student s;
        cout << "\nEnter name: ";
        cin >> s.name;
        cout << "Enter roll: ";
        cin >> s.roll;
        cout << "Enter year: ";
        cin >> s.year;

        allocateRoom(s);
    }

    void allocateRoom(Student s) {
        for (auto &r : rooms) {
            if (r.occupants.size() < r.capacity) {
                r.occupants.push_back(s);
                studentRoom[s.roll] = r.roomNo;
                cout << "\nAllocated Room " << r.roomNo << " to " << s.name << endl;
                return;
            }
        }

        cout << "\nNo rooms available. Added to waiting list.\n";
        waitlist.push(s);
    }

    void vacateRoom() {
        int roll;
        cout << "\nEnter roll number to vacate room: ";
        cin >> roll;

        if (!studentRoom.count(roll)) {
            cout << "Student not found.\n";
            return;
        }

        int roomNo = studentRoom[roll];

        for (auto &r : rooms) {
            if (r.roomNo == roomNo) {
                for (int i = 0; i < r.occupants.size(); i++) {
                    if (r.occupants[i].roll == roll) {
                        r.occupants.erase(r.occupants.begin() + i);
                        break;
                    }
                }
                break;
            }
        }

        studentRoom.erase(roll);
        cout << "Room vacated.\n";

        if (!waitlist.empty()) {
            Student next = waitlist.front();
            waitlist.pop();
            allocateRoom(next);
            cout << "Waiting list student allocated.\n";
        }
    }

    void searchStudent() {
        int roll;
        cout << "\nEnter roll number: ";
        cin >> roll;

        if (studentRoom.count(roll))
            cout << "Student is in Room " << studentRoom[roll] << endl;
        else
            cout << "Not allocated yet.\n";
    }

    void showRooms() {
        cout << "\n--- Room Status ---\n";
        for (auto &r : rooms) {
            cout << "Room " << r.roomNo << " ("
                 << r.occupants.size() << "/" << r.capacity << "): ";
            for (auto &s : r.occupants)
                cout << s.name << " ";
            cout << "\n";
        }
    }
};

int main() {
    HostelSystem hs;
    int choice;

    while (true) {
        cout << "\n1. Register Student\n2. Vacate Room\n3. Search Student\n4. Show Rooms\n5. Exit\n";
        cout << "Enter choice: ";
        cin >> choice;

        switch (choice) {
            case 1: hs.registerStudent(); break;
            case 2: hs.vacateRoom(); break;
            case 3: hs.searchStudent(); break;
            case 4: hs.showRooms(); break;
            case 5: return 0;
            default: cout << "Invalid choice.\n";
        }
    }
}
