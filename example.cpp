// example.cpp
#include <iostream>

struct Vec { float x, y, z; };
Vec vec(float x, float y, float z) { return Vec{x,y,z}; }

struct Dir { 
    float z; 
    bool iszero() const { return x==0 && y==0 && z==0; }
    float x, y;
};
struct D { 
    int type; 
    float zmargin, eyeheight, aboveeye; 
};

int main()
{
    Vec yo{0,0,0};
    Dir dir{0,0,0};
    D* d = nullptr;
    Vec wall{0,0,0};
    float below = 0, above = 0;

    if (yo.z < 0)
    {
        if (yo.z < 0)
        {
            wall = vec(0, 0, -1);
            return false;
        }
    }
    else if (dir.iszero() 
          || (dir.z < 0 && (d->type >= ENT_INANIMATE 
                || above >= d->zmargin - (d->eyeheight + d->aboveeye) / 3.0f)))
    {
        wall = vec(0, 0, 1);
        return false;
    }

    return 0;
}
