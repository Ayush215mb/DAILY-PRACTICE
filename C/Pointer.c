#include<stdio.h>

int main()
{
    int a,b,*p,*q;
    p=&a;
    q=&b;
    printf("%d\n%d\n\n",p,q);


    printf("Enter a and b: ");
    scanf("%d %d",&a,&b);

    int c= *p+*q;
    printf("%d\n%d\n%d\n",p,q,c);
}