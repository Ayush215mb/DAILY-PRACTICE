#include<stdio.h>
#include<limits.h>
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

    int max=INT_MIN,smax=INT_MIN;
    for(int j=0;j<m;j++)
    {
        if(max < arr[j])
        {
            max=arr[j];
        }
    }
    printf("%d is the largest\n",max);
    
    for(int j=0;j<m;j++)
    {
        if(arr[j]!=max && smax < arr[j])
        {
            smax=arr[j];
        }
    }
    printf("%d is the second largest\n",smax);
}
