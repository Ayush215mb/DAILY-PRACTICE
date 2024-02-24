#include<stdio.h>
int factorial(int a)
{
    int m=1;
    while(a!=0)
    {
         m = a*m;
        a=a-1;
    }
    return m;
}

int ncr(int n,int r)
{
    return factorial(n)/(factorial(r)*factorial(n-r));
}
int main()
{    
    int n;
    printf("Enter the value of n: ");
    scanf("%d",&n);

   for(int i=0; i<=n;i++) 
   {
    for(int j=0; j<=i; j++)
    {
        int x=ncr(i,j);
        printf("%d ",x);
    }
    printf("\n");
   }

}


