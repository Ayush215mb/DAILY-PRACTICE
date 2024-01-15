//given an array of integers, change the value of all odd indexed to its second multiple an increment all even indexed value by 10.
#include<stdio.h>
int main()
{
    int m;
    printf("Enter the size of Array:");
    scanf("%d",&m);
    int arr[m];
    printf("Enter %d elements to add in the array:",m);
    for(int i=0;i<m;i++)
    {
        scanf("%d",&arr[i]);
    }
    for(int j=0;j<m;j++)
    {
       if(j%2==0)
       {
        arr[j]= 10 + arr[j];
       }
       else
       {
        arr[j]= 2 * arr[j];
       }
    }

    for(int i=0;i<m;i++)
    {
       printf("%d  ",arr[i]);
    }

}