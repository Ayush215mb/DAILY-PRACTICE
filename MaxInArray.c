#include<stdio.h>

int max(int arr[5],int n)
{
    int max= arr[0];
    for(int i=1; i<=n; i++)
    {
        if(max < arr[i])
        {
            max= arr[i];
        }
    }
    return max;
}
int main()
{
    int arr[5],n=5;
    printf("Enter 5 elements:");
    for(int j=0; j<n; j++)
    {
        scanf("%d",&arr[j]);
    }
    printf("The maximum element in the array is %d",max(arr,n));

}