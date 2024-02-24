//take array and a number as input and print whether the given number is present inside the array or not
#include<stdio.h>
int main() 
{
    int m;
    printf("Enter the size of Array:");
    scanf("%d",&m);
    int arr[m];
    printf("\nEnter %d elements to add in the array:",m);
    for(int i=0;i<m;i++)
    {
        scanf("%d",&arr[i]);
    }

    int x;
    printf("\nEnter the number which you want to search:");
    scanf("%d",&x);
    int count=0;
    for(int k=0;k<m;k++)
    {
        if(arr[k]==x)
        {
            count+=1;
            break;
        }
    }
    if(count==0) 
    {
        printf("\n%d is not inside the array.",x);
    }
    if(count==1) 
    {
        printf("\n%d is inside the array.",x);
    }
}
