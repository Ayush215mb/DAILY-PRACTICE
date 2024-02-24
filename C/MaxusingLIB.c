#include<stdio.h>
#include<limits.h>

int mx(int arr[5],int n)
{
    int max=INT_MIN;//smallest integer in C
    for(int i=0; i<n; i++)
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
    printf("The maximum element in the array is %d",mx(arr,n));

}
