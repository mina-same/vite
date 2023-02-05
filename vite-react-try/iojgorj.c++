#include <iostream>
using namespace std;


int main()
{
  int t;
  cin >> t;
  int m;
  string s;
  for (int i = 0; i < t; i++)
  {
    int n;
    string s;
    cin >> n >> s;
    int l = 0, r = n - 1, ok = 0;
    while (l <= r)
    {
      if (s[l] == s[r])
      {
        cout << n << endl;
        ok = 1;
        break;
      }
      else
      {
        n -= 2;
        l++;
        r--;
      }
    }
    if (!ok)
      cout << 0 << endl;
  }
  return 0; 
}