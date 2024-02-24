#include<stdio.h>
int main()
{
    int x[5],sum=0;
    printf("Enter the elements of array: ");
    
    for(int i=0;i<=4;i++)
    {
        scanf("%d",&x[i]);
        sum= sum + x[i];
    }
    
    printf("The sum of elements of array is %d",sum);
    
}
