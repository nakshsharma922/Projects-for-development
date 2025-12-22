#include <bits/stdc++.h>
using namespace std;

int main()
{
    vector<int> adj[6];
    for (int i = 0; i < 9; i++)
    {
        int u, v;
        cin >> u >> v;
        adj[u].push_back(v);
        //adj[v].push_back(u);
    }

    //cout << adj[0][1];

    // for(int i=0;i<6;i++) {
    //     cout << i << " : ";
    //     for(int j: adj[i]) {
    //         cout << j << " ";
    //     }
    //     cout << endl;
    // }

    queue<int> q;
    int visited[6] = {0};
    visited[0] = 1;
    vector<int> bfs;
    q.push(0);
    while(!q.empty()) {
        int node = q.front();
        q.pop();
        bfs.push_back(node);
        
        for(auto i:adj[node]) {
            if(!visited[i]) {
                visited[i] = true;
                q.push(i);
            }
        }
    }

    for(auto i: bfs) {
        cout << i << " ";
    }
}