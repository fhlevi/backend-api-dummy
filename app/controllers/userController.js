exports.loginUser = function(req, res) {
    const { phone_number, password } = req.body
    let response = {
      status: 200
    }
  
    const mockValidate = {
      phoneNumber: '081310273428',
      password: 'chairul_12345'
    }
  
    if(!!phone_number && !!password) {
      if(mockValidate.phoneNumber === phone_number && mockValidate.password === password) {
        response = {
          status: 200,
          data: {
            full_name: "Tissa Maharanti",
            phone_number: "081310273428",
            isQrenUser: false,
            token: "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJjT0o0OUFldlRmTm9ieno2bllOb2QtM3c4U3pmUE5RSEpYaVpQbjlTbXI0In0.eyJleHAiOjE2MjcxNjY2MDYsImlhdCI6MTYyNzE2NjMwNiwianRpIjoiOTgzNjAzZGMtMmZiMy00M2I0LWFmYjctZGRlZDYxM2RlMzdjIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL215cmVhbG0iLCJhdWQiOlsicmVhbG0tbWFuYWdlbWVudCIsInNpbXBsZV9jbGllbnQiLCJhY2NvdW50Il0sInN1YiI6IjdiYTY4MDE1LThhZWUtNGI2MC05MTJmLTczNzk1YmQ3ZGJlYSIsInR5cCI6IkJlYXJlciIsImF6cCI6Im15Y2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6ImJlNDhhMDgzLWM5MzQtNDQ4Yy1iNjkyLWM5ZGVmMzk0ZWExNSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly93d3cua2V5Y2xvYWsub3JnIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJTSU1QTEVfUk9MRSIsImRlZmF1bHQtcm9sZXMtbXlyZWFsbSIsIkNPTVBPU0lURV9ST0xFIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InJlYWxtLW1hbmFnZW1lbnQiOnsicm9sZXMiOlsidmlldy1pZGVudGl0eS1wcm92aWRlcnMiLCJ2aWV3LXJlYWxtIiwibWFuYWdlLWlkZW50aXR5LXByb3ZpZGVycyIsImltcGVyc29uYXRpb24iLCJyZWFsbS1hZG1pbiIsImNyZWF0ZS1jbGllbnQiLCJtYW5hZ2UtdXNlcnMiLCJxdWVyeS1yZWFsbXMiLCJ2aWV3LWF1dGhvcml6YXRpb24iLCJxdWVyeS1jbGllbnRzIiwicXVlcnktdXNlcnMiLCJtYW5hZ2UtZXZlbnRzIiwibWFuYWdlLXJlYWxtIiwidmlldy1ldmVudHMiLCJ2aWV3LXVzZXJzIiwidmlldy1jbGllbnRzIiwibWFuYWdlLWF1dGhvcml6YXRpb24iLCJtYW5hZ2UtY2xpZW50cyIsInF1ZXJ5LWdyb3VwcyJdfSwic2ltcGxlX2NsaWVudCI6eyJyb2xlcyI6WyJLQ19ST0xFIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJJcndhbiBLIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiaXJ3YWFuayIsImdpdmVuX25hbWUiOiJJcndhbiIsImZhbWlseV9uYW1lIjoiSyJ9.Hacq8KR4LQe0dcOeF49PEhRJrD2t8J8OE_SVNaPGd4ATyGYrn-9CoZzJUclS_mnQ3F4HmKF9huRLgsamTLd0czD9fxE3tDLkdvM9JiejkMPCPTjRc77eFa0ZXtYtBFj162EDx8hRzqfegL6GU-Va3bdK3-Klp9tLaJ7ws5v3D_maAaV0v8DE5aGYkk_4ICSs5J8pnGoHx0V-xeIwjdrXWGpeDvkxxNMV9qXRIYPW3ziBsGjbfPfYJ3BKQ12diBhcfl-1-wlQsYF-9EzjkHjnPnG4d0ZclFByLlS9yNf5jx-1pcJMyDKgzMIJ6XxZJ6jd0y3_KXS0-wkTiWSXRNNG2w",
            refresh_token: "yJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIyNTA0ZmM5Yi0wMmUzLTRjY2YtYjQzZi0xNTg2MDg2NWQzYjkifQ.eyJleHAiOjE2MjcxNjgxMDYsImlhdCI6MTYyNzE2NjMwNiwianRpIjoiNjM2YmQ1ZGMtN2M4YS00ZmVlLWJkNGMtZDRjZDQ4MDllYjI2IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL215cmVhbG0iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvbXlyZWFsbSIsInN1YiI6IjdiYTY4MDE1LThhZWUtNGI2MC05MTJmLTczNzk1YmQ3ZGJlYSIsInR5cCI6IlJlZnJlc2giLCJhenAiOiJteWNsaWVudCIsInNlc3Npb25fc3RhdGUiOiJiZTQ4YTA4My1jOTM0LTQ0OGMtYjY5Mi1jOWRlZjM5NGVhMTUiLCJzY29wZSI6ImVtYWlsIHByb2ZpbGUifQ.4V-A1-UmIVAqyuJmO-piedv6dIVS-j5JBUcqHYf6wM4",
          }
        }
      } else if (mockValidate.phoneNumber !== phone_number || mockValidate.password !== password) {
        response = {
          status: 401,
          data: {
            message: 'Nomor HP dan Password yang anda masukkan salah'
          }
        }
      }
    } else {
      response = {
        status: 422,
        data: {
          message: 'Field nomor hp dan password wajib diisi'
        }
      }
    }
  
    res.status(response.status).json(response)
  }