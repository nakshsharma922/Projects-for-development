#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// 🔹 0/1 Knapsack Function
int knapsack(vector<int> value, vector<int> weight, int W, int n, vector<int> &selected) {
    vector<vector<int>> dp(n+1, vector<int>(W+1, 0));

    for(int i = 1; i <= n; i++) {
        for(int w = 0; w <= W; w++) {
            if(weight[i-1] <= w) {
                dp[i][w] = max(value[i-1] + dp[i-1][w-weight[i-1]],
                               dp[i-1][w]);
            } else {
                dp[i][w] = dp[i-1][w];
            }
        }
    }

    // 🔹 Backtracking to find selected students
    int w = W;
    for(int i = n; i > 0; i--) {
        if(dp[i][w] != dp[i-1][w]) {
            selected.push_back(i-1);
            w -= weight[i-1];
        }
    }

    return dp[n][W];
}

// 🔹 Bin Packing (First Fit Decreasing)
void binPacking(vector<int> items, int capacity) {
    sort(items.begin(), items.end(), greater<int>());
    
    vector<vector<int>> bins;

    for(int item : items) {
        bool placed = false;

        for(auto &bin : bins) {
            int sum = 0;
            for(int x : bin) sum += x;

            if(sum + item <= capacity) {
                bin.push_back(item);
                placed = true;
                break;
            }
        }

        if(!placed) {
            bins.push_back({item});
        }
    }

    // 🔹 Output bins
    cout << "\nBin Packing Result:\n";
    for(int i = 0; i < bins.size(); i++) {
        cout << "Bin " << i+1 << ": ";
        for(int x : bins[i]) {
            cout << x << " ";
        }
        cout << endl;
    }

    cout << "Total Bins Used: " << bins.size() << endl;
}

// 🔹 Main Function
int main() {
    int n, W;

    cout << "Enter number of students: ";
    cin >> n;

    vector<int> value(n), weight(n);

    cout << "Enter merit values:\n";
    for(int i = 0; i < n; i++) cin >> value[i];

    cout << "Enter scholarship required:\n";
    for(int i = 0; i < n; i++) cin >> weight[i];

    cout << "Enter total scholarship budget: ";
    cin >> W;

    vector<int> selected;

    int maxMerit = knapsack(value, weight, W, n, selected);

    cout << "\nSelected Students (index): ";
    for(int i : selected) cout << i << " ";

    cout << "\nMaximum Merit Achieved: " << maxMerit << endl;

    // 🔹 Bin Packing Input
    int m, capacity;
    cout << "\nEnter number of items: ";
    cin >> m;

    vector<int> items(m);
    cout << "Enter item weights:\n";
    for(int i = 0; i < m; i++) cin >> items[i];

    cout << "Enter bin capacity: "; 
    cin >> capacity;

    binPacking(items, capacity);

    return 0;
}